defmodule AppakaWeb.Schema.ContentTypes do
  use Absinthe.Schema.Notation

  @desc "A ticket"
  object :ticket do
    field :id, :id
    field :title, :string
    field :description, :string
    field :author, :user
    field :story_points, :integer
    field :inserted_at, :naive_datetime
  end

end
