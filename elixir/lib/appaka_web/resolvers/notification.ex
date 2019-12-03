defmodule AppakaWeb.Resolvers.Notification do

  def list(args, _resolution) do
    {:ok, DataSource.OpsGenie.Alert.list(args)}
  end

end
