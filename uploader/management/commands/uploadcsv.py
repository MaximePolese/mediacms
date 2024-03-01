import csv
from django.core.management.base import BaseCommand, CommandError


class Command(BaseCommand):
    help = 'Import data from a CSV file'
    data = []

    def add_arguments(self, parser):
        parser.add_argument('file_path', type=str, help='Path to the CSV file')

    def handle(self, *args, **options):
        file_path = options['file_path']
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
                self.data.append(
                    [competition_number, competition_name, number, horse, rider, picture, prefix, extension, comment])
        print(self.data)
        self.stdout.write(self.style.SUCCESS('Data imported successfully'))
