defmodule AppakaWeb.Schema.ContentTypes do
  use Absinthe.Schema.Notation

  enum :ticket_status do
    value :new
    value :wip
    value :done
    value :rejected
    value :closed
  end

  @desc "A ticket"
  object :ticket do
    field :id, :id
    field :title, :string
    field :description, :string
    field :author, :user
    field :story_points, :integer
    field :status, :ticket_status
    field :inserted_at, :naive_datetime
  end

end
