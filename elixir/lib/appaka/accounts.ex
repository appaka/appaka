defmodule Appaka.Accounts do

  alias Appaka.{Models, Repo}

  def find_user(id) do
    Repo.get(Models.Users, id)
  end

  def create_user(attrs) do
    Repo.transaction fn ->
      with {:ok, user} <- do_create_user(attrs) do
        user
      end
    end

  end

  defp do_create_user(attrs) do
    attrs
    |> Models.Users.changeset
    |> Appaka.Repo.insert
  end

end
