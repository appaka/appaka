# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.
use Mix.Config

# General application configuration
config :appaka,
  ecto_repos: [Appaka.Repo]

# Configures the endpoint
config :appaka, AppakaWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "oxuac8/0WnOgbiE17w/l47ZNzrpOKULZk3aiq+d6j3jvhgjeGizt7f9jcie37oJq",
  render_errors: [view: AppakaWeb.ErrorView, accepts: ~w(json)],
  pubsub: [name: Appaka.PubSub, adapter: Phoenix.PubSub.PG2]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

config :cors_plug,
  origin: "*",
  max_age: 86400,
  method: ["GET","POST"]

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env}.exs"
