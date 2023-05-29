#!/bin/bash
export CLUSTERPOS=$(hostname | awk -F'.' '{print $1}')
export CLUSTER=$(hostname | awk -F'-' '{print $1}')
/usr/local/bin/node /Users/mahadad/bin/42drp/index.js
