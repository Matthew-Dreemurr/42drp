export CLUSTERPOS=$(hostname | awk -F'.' '{print $1}')
export CLUSTER=$(hostname | awk -F'-' '{print $1}')
/usr/local/bin/node index.js
