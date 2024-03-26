import csv
import os
import shutil

from django.core.files import File

from django.core.management.base import BaseCommand, CommandError

from django.conf import settings

from files.helpers import rm_file
from files.models import Media, Category
from users.models import User


class Command(BaseCommand):
    help = 'Import medias from ftp server'

    # def add_arguments(self, parser):
    #     parser.add_argument('file_path', type=str, help='Path to the CSV file')

    def handle(self, *args, **options):
        data = download_csv()
        upload_media(data)
        self.stdout.write(self.style.SUCCESS('Data imported successfully'))


def download_csv():
    file_path = '/home/mediacms.io/mediacms/videos/file1.csv'
    data = []
    with open(file_path, 'r', encoding='utf-8') as file:
        csvreader = csv.reader(file, delimiter=';')
        next(csvreader)  # skip header line
        for row in csvreader:
            competition_number = int(row[0])
            competition_name = row[1]
            number = int(row[2])
            horse = row[3]
            rider = row[4]
            try:
                picture = row[5]
            except ValueError:
                picture = "no name available"
            prefix = row[6]
            extension = row[7]
            comment = row[8]
            data.append(
                [competition_number, competition_name, number, horse, rider, picture, prefix, extension, comment])
    print(data)
    return data


def upload_media(data):
    source_directory = "/home/mediacms.io/mediacms/videos"
    all_files = os.listdir(source_directory)
    video_files = [file for file in all_files if file.endswith('.mp4')]
    print(video_files)

    for video_file in video_files:
        video_file_name = video_file.split('.')[0]
        title = ""
        category_name = ""
        for row in data:
            picture = str(row[5])
            if picture == video_file_name:
                title = row[4] + " " + row[3]
                category_name = row[1]
        print(title, category_name)

        if Category.objects.filter(title=category_name).exists():
            new_category = Category.objects.get(title=category_name)
        else:
            new_category = Category.objects.create(title=category_name)

        source_file_path = os.path.join(source_directory, video_file)
        print(source_file_path)
        destination_file_path = os.path.join(settings.MEDIA_ROOT, video_file)
        print(destination_file_path)
        shutil.copy2(source_file_path, destination_file_path)

        user = User.objects.get(username='cha')
        with open(destination_file_path, "rb") as f:
            new_media = Media.objects.create(title=title, media_file=File(f), user=user)
            new_media.category.add(new_category)
        rm_file(destination_file_path)
