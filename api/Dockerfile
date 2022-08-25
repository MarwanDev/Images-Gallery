FROM python:3.10

WORKDIR /app

EXPOSE 5050

COPY Pipfile Pipfile.lock ./

RUN pip install pipenv
RUN pip install Flask
RUN pip install -U flask-cors
RUN pip install requests
# RUN pipenv lock --requirements > requirements.txt
# RUN pip install -r requirements.txt

COPY . ./

CMD [ "python", "main.py" ]