FROM java:8

# groups and users
RUN groupadd -r cassandra --gid=999 && useradd -r -g cassandra --uid=999 cassandra

# install
ENV MIRROR http://apache.mirrors.pair.com/
ENV VERSION 3.7

RUN curl $MIRROR/cassandra/$VERSION/apache-cassandra-$VERSION-bin.tar.gz | tar -xzf - -C /opt \
    && mv /opt/apache-cassandra-$VERSION /opt/cassandra \
    && mkdir -p /tmp/cassandra

# post installation config
ADD config_cassandra.sh /opt/cassandra
RUN chmod +x /opt/cassandra/config_cassandra.sh
ENTRYPOINT ["/opt/cassandra/config_cassandra.sh"]

RUN chown -R cassandra:cassandra /opt/cassandra

# start
USER cassandra
WORKDIR /opt/cassandra

# 7000: ipc; 7001: tls ipc; 7199: jmx; 9042: cql; 9160: thrift
EXPOSE 7000 7001 7199 9042 9160

CMD ["/opt/cassandra/bin/cassandra", "-f"]