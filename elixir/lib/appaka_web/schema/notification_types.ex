defmodule AppakaWeb.Schema.NotificationTypes do
  use Absinthe.Schema.Notation

  @desc "A notification"
  object :notification do
    field :id, :id
    field :source, :string
    field :message, :string
    field :acknowledged, :boolean
    field :priority, :string
    field :createdAt, :string
    field :updatedAt, :string
  end

end
