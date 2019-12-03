defmodule AppakaWeb.Resolvers.Accounts do

  def login(%{email: email, password: password}, _info) do
    with {:ok, user} <- login_with_email_pass(email, password),
         {:ok, user} <- Appaka.Accounts.store_token(user) do
      {:ok, user}
    end
  end

  defp login_with_email_pass(email, password) do
    user = Appaka.Accounts.get_by_email(email)
    if user.password == password do
      {:ok, user}
    else
      {:error, nil}
    end
  end

  def find_user(_parent, %{id: id}, _resolution) do
    case Appaka.Accounts.find_user(id) do
      nil ->
        {:error, "User ID #{id} not found"}
      user ->
        {:ok, user}
    end
  end

  #def create_user(_parent, args, %{context: %{current_user: %{admin: true}}}) do
  def create_user(_parent, args, _resolution) do
    Appaka.Accounts.create_user(args)
  end
  def create_user(_parent, _args, _resolution) do
    {:error, "Access denied"}
  end

end
