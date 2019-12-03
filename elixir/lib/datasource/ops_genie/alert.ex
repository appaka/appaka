defmodule DataSource.OpsGenie.Alert do

  # see https://docs.opsgenie.com/docs/alert-api

  alias DataSource.OpsGenie.Client

  def map_keys_to_atoms(map) do
    for {key, val} <- map, into: %{}, do: {String.to_atom(key), val}
  end

  def list(options \\ []) do
    params = %{
      # "limit" => Keyword.get(options, :limit, 20),
      "limit" => 20,
      # "searchIdentifier" => "openAlerts",
      "searchIdentifierType" => "name",
      "sort" => "createdAt",
      "order" => "desc",
    }
    # poor man's rate limit:
    Process.sleep(1100)
    # TODO use "search" rate limit
    case Client.get().get_body("/alerts?" <> URI.encode_query(params)) do
      {:ok, %{"data" => data} = body}
      ->
        data
        |> Enum.map(&map_keys_to_atoms(&1))
      error ->
        error
    end
  end
end
