defmodule DataSource.OpsGenie.ClientImpl do
  use HTTPoison.Base

  @behaviour DataSource.OpsGenie.Client

  alias DataSource.OpsGenie.Client

  def get_api_key() do
    System.get_env("OPSGENIE_API_KEY")
  end

  # behaviour HTTPoison.Base

  @impl HTTPoison.Base
  def process_url(url) do
    "https://api.opsgenie.com/v2" <> url
  end

  @impl HTTPoison.Base
  def process_request_headers(headers) do
    [{"Authorization", "GenieKey " <> get_api_key()} | headers]
  end

  @impl HTTPoison.Base
  def process_response_body(""), do: nil
  def process_response_body(body) do
    body
    |> Jason.decode!()
  end

  # ----------------------------------------------------------------------------
  # behaviour DataSource.OpsGenie.Client

  @impl Client
  def ready?() do
    case get_api_key() do
      nil -> {:error, "OpsGenie API key is missing"}
      "" -> {:error, "OpsGenie API key is missing"}
      _ -> :ok
    end
  end

  @impl Client
  def get_body(url) do
    case get(url) do
      {:ok, %HTTPoison.Response{body: body}} -> {:ok, body}
      error -> error
    end
  end

end
