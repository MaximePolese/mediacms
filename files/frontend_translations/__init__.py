from django.conf import settings

from .fr import translations as fr_translations

translations = {}
translations['fr'] = fr_translations


def get_frontend_translations(language_code):
    if language_code not in [pair[0] for pair in settings.LANGUAGES]:
        return {}

    if language_code in ['en', 'en-us', 'en-gb']:
        return {}

    translation = translations[language_code]

    # replace any keys from translation that contains a space with an underscore
    # do not keep initial keys that contain a space
    for key in list(translation.keys()):
        if ' ' in key:
            translation[key.replace(' ', '_')] = translation.pop(key)

    return translation