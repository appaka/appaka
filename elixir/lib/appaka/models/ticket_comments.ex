defmodule Appaka.Models.TicketComments do
  use Ecto.Schema
  import Ecto.Changeset

  schema "ticket_comments" do
    field :body, :string

    belongs_to :users, Users, foreign_key: :author_id
    belongs_to :tickets, Tickets, foreign_key: :ticket_id

    timestamps()
  end

  @doc false
  def changeset(attrs) do
    %__MODULE__{}
    |> changeset(attrs)
  end

  @doc false
  def changeset(%__MODULE__{} = ticket_comments, attrs) do
    ticket_comments
    |> cast(attrs, [:body, :inserted_at, :updated_at])
    |> validate_required([:body])
  end
end
