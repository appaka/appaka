defmodule Appaka.Accounts do

  alias Appaka.{Models, Repo}

  def find_user(id) do
    Repo.get(Models.Users, id)
  end

  def get_by_email(email) do
    Repo.get_by(Models.Users, email: email)
  end

  def store_token(user) do
    user
    |> Map.put(:token, :crypto.hash(:sha, to_string(:rand.uniform(999999999))) |> Base.encode16)
    |> Appaka.Repo.update
  end

  def create_user(attrs) do
    Repo.transaction fn ->
      attrs
      |> Models.Users.changeset
      |> Appaka.Repo.insert
    end
  end

end
