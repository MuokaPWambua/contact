FROM python:3.9

ADD . /app
WORKDIR /app
COPY . /app

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONBUFFERED 1

RUN pip install -r requirements.txt
RUN chmod -R a+rwx /app
RUN chown -R $USER:$USER

CMD ["uwsgi", "uwsgi.ini"]
ENTRYPOINT ["./entrypoint.sh"]

