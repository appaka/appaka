defmodule AppakaWeb.Resolvers.Content do

  def list_tickets(%Appaka.Models.Users{} = author, args, _resolution) do
    {:ok, Appaka.Content.list_tickets(author, args)}
  end
  def list_tickets(_parent, _args, _resolution) do
    {:ok, Appaka.Content.list_tickets()}
  end

  def create_ticket(_parent, args, %{context: %{current_user: user}}) do
    Appaka.Content.create_ticket(user, args)
  end
  def create_post(_parent, _args, _resolution) do
    {:error, "Access denied"}
  end

end