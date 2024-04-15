import csv
import os
import shutil

from django.core.files import File

from django.core.management.base import BaseCommand, CommandError

from django.conf import settings

from files import helpers
from files.helpers import rm_file
from files.models import Media, Category, Tag
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
        rider_tag = ""
        horse_tag = ""
        title = ""
        category_name = ""
        for row in data:
            picture = str(row[5])
            if picture == video_file_name:
                rider_tag = row[4]
                horse_tag = row[3]
                title = rider_tag + " - " + horse_tag
                category_name = row[1]
        print(title, category_name)

        new_category, _ = Category.objects.get_or_create(title=category_name)
        new_rider_tag, _ = Tag.objects.get_or_create(title=helpers.get_alphanumeric_only(rider_tag))
        new_horse_tag, _ = Tag.objects.get_or_create(title=helpers.get_alphanumeric_only(horse_tag))

        source_file_path = os.path.join(source_directory, video_file)
        print(source_file_path)
        destination_file_path = os.path.join(settings.MEDIA_ROOT, video_file)
        print(destination_file_path)
        shutil.copy2(source_file_path, destination_file_path)

        user = User.objects.get(username='cha')

        with open(destination_file_path, "rb") as f:
            new_media = Media.objects.create(title=title, media_file=File(f), user=user)
            new_media.category.add(new_category)
            new_media.tags.add(new_rider_tag)
            new_media.tags.add(new_horse_tag)

        rm_file(destination_file_path)
