FROM python:3.9-slim

WORKDIR /app

ENV FLASK_APP=app.py
ENV FLASK_ENV=production  
ENV PYTHONPATH=/app

RUN apt-get update && apt-get install -y --no-install-recommends \
    curl \
    && rm -rf /var/lib/apt/lists/*

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

CMD ["sh", "-c", "python scripts/init_db.py && flask run --host=0.0.0.0  --port=5000"]