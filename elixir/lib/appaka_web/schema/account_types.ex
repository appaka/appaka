defmodule AppakaWeb.Schema.AccountTypes do
  use Absinthe.Schema.Notation

  alias AppakaWeb.Resolvers

  @desc "A user"
  object :user do
    field :id, :id
    field :name, :string
    field :email, :string
    field :tickets, list_of(:ticket) do
      arg :date, :date
      resolve &Resolvers.Content.list_tickets/3
    end
  end

end
