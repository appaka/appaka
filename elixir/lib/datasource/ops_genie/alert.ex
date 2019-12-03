defmodule DataSource.OpsGenie.Alert do

  # see https://docs.opsgenie.com/docs/alert-api

  alias DataSource.OpsGenie.Client

  def format_level(raw_alert) do
    if raw_alert["acknowledged"] do
      if raw_alert["priority"] == "P1" do
        "alert"
      else
        "warn"
      end
    else
      "info"
    end
  end

  def format_alert(raw_alert) do
    %{
      id: raw_alert["id"],
      source: raw_alert["source"],
      message: raw_alert["message"],
      acknowledged: raw_alert["acknowledged"],
      priority: raw_alert["priority"],
      level: format_level(raw_alert),
      createdAt: raw_alert["createdAt"],
      updatedAt: raw_alert["updatedAt"],
    }
  end

  def list(options \\ []) do
    params = %{
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
        |> Enum.map(&format_alert(&1))
      error ->
        error
    end
  end
end
