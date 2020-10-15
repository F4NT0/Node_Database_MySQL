#!/bin/bash

# ---------------------------------
# COMPLETE DELETE MYSQL FROM SYSTEM
# ---------------------------------

sudo apt-get remove --purge *mysql/*
sudo apt-get autoremove
sudo apt-get autoclean
echo "MySQL Remove Sucessfully"