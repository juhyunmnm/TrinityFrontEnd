# ELASTICSEARCH IMAGE 
FROM docker.elastic.co/elasticsearch/elasticsearch:8.2.2

# USER root
USER root

# COPY FILES in CURRENT FOLDER to ELASTIC_SEARCH CONTAINER/ 
COPY . / 

RUN set -eux;\
    mkdir /state;\
    chown elasticsearch /state;\
    chmod +x /entrypoint.sh

ENTRYPOINT [ "/entrypoint.sh" ]