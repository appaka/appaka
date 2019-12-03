defmodule AppakaWeb.Router do
  use AppakaWeb, :router

  pipeline :api do
    plug :fetch_session
    plug :accepts, ["json"]
    plug AppakaWeb.Context
  end

  scope "/api" do
    pipe_through :api

    forward "/graphiql", Absinthe.Plug.GraphiQL,
      schema: AppakaWeb.Schema

    forward "/", Absinthe.Plug,
      schema: AppakaWeb.Schema
  end

end
