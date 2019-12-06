#!/usr/bin/env bash

mix local.rebar --force
mix deps.get

exec "$@"
