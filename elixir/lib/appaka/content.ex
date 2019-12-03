defmodule Appaka.Content do
  import Ecto.Query

  alias Appaka.{Repo, Models}

  def list_tickets(author, %{date: date}) do
    from(t in Models.Tickets,
      where: t.author_id == ^author.id,
      where: fragment("date_trunc('day', ?)", t.inserted_at) == type(^date, :date))
    |> Repo.all
  end
  def list_tickets(author, _) do
    from(t in Models.Tickets, where: t.author_id == ^author.id)
    |> Repo.all
  end

  def list_tickets do
    Repo.all(Models.Tickets)
  end

  def create_ticket(user, attrs) do
    user
    |> Ecto.build_assoc(:tickets, attrs)
    |> Repo.insert
  end

end
