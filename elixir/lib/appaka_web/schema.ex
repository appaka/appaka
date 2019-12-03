defmodule AppakaWeb.Schema do
  use Absinthe.Schema

  import_types Absinthe.Type.Custom
  import_types AppakaWeb.Schema.AccountTypes
  import_types AppakaWeb.Schema.ContentTypes

  alias AppakaWeb.Resolvers

  query do

    @desc "Login!"
    field :login, :user do
      arg :email, non_null(:string)
      arg :password, non_null(:string)

      resolve(&Resolvers.Accounts.login/2)
    end

    @desc "Get all tickets"
    field :tickets, list_of(:ticket) do
      resolve &Resolvers.Content.list_tickets/3
    end

    @desc "Get all stories"
    field :stories, list_of(:ticket) do
      resolve &Resolvers.Content.list_stories/3
    end

    @desc "Get tasks"
    field :tasks, list_of(:ticket) do
      arg :id, non_null(:id)
      resolve &Resolvers.Content.list_tasks/1
    end

    @desc "Get a user"
    field :user, :user do
      arg :id, non_null(:id)
      resolve &Resolvers.Accounts.find_user/3
    end

  end

  mutation do

    @desc "Create a ticket"
    field :create_ticket, :ticket do
      arg :title, non_null(:string)
      arg :description, non_null(:string)

      resolve &Resolvers.Content.create_ticket/3
    end

    @desc "Create a user"
    field :create_user, :user do
      arg :name, non_null(:string)
      arg :email, non_null(:string)
      arg :password, non_null(:string)

      resolve &Resolvers.Accounts.create_user/3
    end

  end

end
