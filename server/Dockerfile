FROM python:3.9
WORKDIR /app
ADD . /app
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONBUFFERED 1
RUN apk update && apk upgrade && apk add --virtual python3-pip doas python3-dev postgresql-dev libpq build-base zlib-dev linux-headers pcre-dev
RUN pip install --no-cache-dir --upgrade -r requirements.txt


CMD ["uwsgi", "uwsgi.ini"]
ENTRYPOINT ["./entrypoint.sh"]

