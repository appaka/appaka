defmodule DataSource.OpsGenie.Client do

  @type url :: String.t

  @callback ready?() :: any
  @callback get_body(url) :: any

  def get() do
    Application.get_env(:appaka, __MODULE__)
  end

end
