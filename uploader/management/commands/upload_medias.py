import csv
import os
import shutil

from django.core.files import File

from django.core.management.base import BaseCommand, CommandError

from django.conf import settings

from files.helpers import rm_file
from files.models import Media
from users.models import User
from ftplib import FTP


class Command(BaseCommand):
    help = 'Import medias from ftp server'

    # def add_arguments(self, parser):
    #     parser.add_argument('file_path', type=str, help='Path to the CSV file')

    def handle(self, *args, **options):
        download_csv()
        upload_media()
        self.stdout.write(self.style.SUCCESS('Data imported successfully'))


def download_csv():
    file_path = '/home/mediacms.io/mediacms/file1.csv'
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
                picture = int(row[5])
            except ValueError:
                picture = 999
            prefix = row[6]
            extension = row[7]
            comment = row[8]
            data.append(
                [competition_number, competition_name, number, horse, rider, picture, prefix, extension, comment])
    print(data)
    return data


def upload_media():
    source_directory = "/home/mediacms.io/mediacms/videos"
    all_files = os.listdir(source_directory)
    video_files = [file for file in all_files if file.endswith('.mp4')]
    print(video_files)

    for video_file in video_files:
        source_file_path = os.path.join(source_directory, video_file)
        print(source_file_path)
        destination_file_path = os.path.join(settings.MEDIA_ROOT, video_file)
        print(destination_file_path)
        shutil.copy2(source_file_path, destination_file_path)

        media_file = destination_file_path
        with open(media_file, "rb") as f:
            myfile = File(f)
            user = User.objects.get(username='admin')
            new = Media.objects.create(media_file=myfile, user=user)
        rm_file(media_file)

# def download_from_ftp(ftp_server, ftp_user, ftp_password, ftp_path):
#     ftp = FTP(ftp_server)
#     ftp.login(ftp_user, ftp_password)
#     ftp.cwd(ftp_path)
#
#     video_directory = os.path.join(settings.MEDIA_ROOT, "videos")
#     if not os.path.exists(video_directory):
#         os.makedirs(video_directory)
#
#     filenames = ftp.nlst()
#     for filename in filenames:
#         if filename.endswith('.mp4'):
#             local_path = os.path.join(video_directory, filename)
#             with open(local_path, 'wb') as f:
#                 ftp.retrbinary('RETR ' + filename, f.write)
#
#     ftp.quit()
