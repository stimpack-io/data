# data.stimpack.io
Upload and manage packs at data.stimpack.io

### Installation
```
git clone git@github.com:stimpack-io/data.git data.stimpack
cd data.stimpack
composer install
npm install
cp .env.example .env
# create a database and edit .env accordingly
php artisan migrate
# get GITHUB credentials from ajthinking
```

### Quick start
Check out web.php. The site only supports github login