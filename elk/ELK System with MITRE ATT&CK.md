# ELK System with MITRE ATT&CK

## MITRE ATT&CK DOCUMENT

[how-to-use-mitre-attack.pdf](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f9e21479-76a5-4036-a4ae-89a10976f871/how-to-use-mitre-attack.pdf)

### Server INFO, Ubuntu 22.05

- Ubuntu 용량 부족 문제
    ```bash
    $ lvm
    lvm> lvextend -l +100%FREE /dev/ubuntu-vg/ubuntu-lv
    lvm> exit
    
    $ resize2fs /dev/ubuntu-vg/ubuntu-lv
    ```
## Elastic Search - 8.2.2 version
Docker
``` docker
%%1. Pull Elasticsearch Image%%
docker pull docker.elastic.co/elasticsearch/elasticsearch:8.2.2

%%2. Run the docker container %%
docker run -d --name elastic --net elk_network -e "discovery.type=single-node" 
docker.elastic.co/elasticsearch/elasticsearch:8.2.2

%%3. Configuration Password for elasticsearch %%
docker exec -it elastic "/bin/bash"
./bin/elasticsearch-setup-password interactive

%%4. cp cert file %%
docker cp elastic:/usr/share/elasticsearch/config/certs/http_ca.crt .

%%5. TESTING %%
curl --cacert http_ca.crt -u elastic "https://{IP}:9200/"

%% ENTER your password sets on the STEP 3 %%

```
## LogStash - 8.2.2 version
Docker
``` docker
docker pull docker.elastic.co/logstash/logstash:8.2.2
```

## Kibana - 8.2.2 version
Docker
``` docker
docker pull docker.elastic.co/kibana/kibana:8.2.2
```
## Beats
Docker