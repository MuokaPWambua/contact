FROM python:3.9

ADD . /app
COPY . /app
WORKDIR /app

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONBUFFERED 1

RUN pip install -r requirements.txt
RUN chmod -R a+rwx /app
RUN chown -R $USER:$USER

EXPOSE 8000
CMD ["uvicorn", "run:app", "--proxy-headers", "--reload", "--access-log", "--host", "0.0.0.0", "--port", "8000"]
ENTRYPOINT ["./entrypoint.sh"]

