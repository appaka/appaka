defmodule Appaka.Models.Tickets do
  use Ecto.Schema
  import Ecto.Changeset

  #alias Appaka.{Accounts, Content}

  schema "tickets" do
    field :type, :string
    field :description, :string
    field :story_points, :integer
    field :release_number, :integer
    field :status, :string

    belongs_to :users, Users, foreign_key: :author_id
    belongs_to :asignee, Users, foreign_key: :asignee_id
    belongs_to :tickets, Tickets, foreign_key: :parent_id
    has_many :ticket_comments, TicketComments, foreign_key: :ticket_id

    timestamps()
  end

  @doc false
  def changeset(attrs) do
    %__MODULE__{}
    |> changeset(attrs)
  end

  @doc false
  def changeset(%__MODULE__{} = ticket, attrs) do
    ticket
    |> cast(attrs, [:id, :type, :description, :story_points, :release_number, :status, :inserted_at, :updated_at])
    |> validate_required([:id])
  end
end
