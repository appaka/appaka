# Script for populating the database. You can run it as:
#
#     mix run priv/repo/seeds.exs
#
# Inside the script, you can read and write to any of your
# repositories directly:
#
#     Appaka.Repo.insert!(%Appaka.SomeSchema{})
#
# We recommend using the bang functions (`insert!`, `update!`
# and so on) as they will fail if something goes wrong.

alias Appaka.{Accounts, Content}

user =
  %Accounts.User{}
  |> Accounts.User.changeset(%{name: "Test", password: "test"})
  |> Appaka.Repo.insert!

user
|> Ecto.build_assoc(:contacts, %{type: "email", value: "test@test.com"})
|> Appaka.Repo.insert!

Content.create_post(user, %{title: "Test Post", body: "Lorem Ipsum", published_at: ~N[2017-10-26 10:00:00]})
