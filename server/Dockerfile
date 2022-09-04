FROM python:3.9

COPY . /app
COPY ./entrypoint.sh /app
WORKDIR /app

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONBUFFERED 1

RUN chmod -R a+rwx /app
RUN python3 -m pip install --upgrade pip
RUN pip install -r requirements.txt
EXPOSE 8000

CMD ["uvicorn", "app:app", "--proxy-headers", "--access-log", "--host", "0.0.0.0", "--port", "8000"]
ENTRYPOINT ["./entrypoint.sh"]

