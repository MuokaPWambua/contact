FROM python:3.9
WORKDIR /app
ADD . /app
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONBUFFERED 1
RUN apt-get update && apt-get -y upgrade && apt-get -y install python3-pip
RUN apt-get -y install python3-dev
RUN apt-get -y install libpq-dev
RUN apt-get -y install build-essential
RUN pip install --no-cache-dir --upgrade -r requirements.txt
RUN chmod a+rwx /app/entrypoint.sh

CMD ["uwsgi", "uwsgi.ini"]
ENTRYPOINT ["./entrypoint.sh"]

