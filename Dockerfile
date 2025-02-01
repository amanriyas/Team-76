FROM python:3.11-slim

# Set environment variables to prevent Python from writing pyc files and to buffer output
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1
ENV PYTHONPATH="/app"


WORKDIR /app

# Install system dependencies
RUN apt-get update && apt-get install -y build-essential libpq-dev && rm -rf /var/lib/apt/lists/*

COPY ./requirements.txt /app/requirements.txt
RUN pip install --upgrade pip --no-cache-dir
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the application code
COPY . ./

RUN python -m compileall .
# Expose the port your server runs on
EXPOSE 8000

CMD ["sh","-c", " python manage.py makemigrations && python manage.py migrate && python manage.py runserver 0.0.0.0:8000"]