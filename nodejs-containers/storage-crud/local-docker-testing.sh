tag=storage-crud
expressAppRoute=/everything
# created this route just for testing, it doesn't do anything but return the string 'everything', I think we can't test /buckets or /objects/:bucket because the container doesn't have access to the service account key json file

docker build . -t $tag -f Dockerfile.local

docker images

docker run -p 49160:8080 -d $tag

curl -i localhost:49160$expressAppRoute