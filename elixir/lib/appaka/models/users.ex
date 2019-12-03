defmodule Appaka.Models.Users do
  use Ecto.Schema
  import Ecto.Changeset

  schema "users" do
    field :name, :string
    field :email, :string
    field :password, :string, virtual: true
    field :password_hash, :string
    field :token, :string

    has_many :ticket, Tickets, foreign_key: :author_id
    has_many :asigned, Tickets, foreign_key: :asignee_id
    has_many :ticket_comments, TicketComments, foreign_key: :author_id

    timestamps()
  end

  @doc false
  def changeset(attrs) do
    %__MODULE__{}
    |> changeset(attrs)
  end

  @doc false
  def changeset(%__MODULE__{} = user, attrs) do
    attrs =
      attrs
      |> Map.put(:password_hash, Comeonin.Argon2.hashpwsalt(attrs.password))
    user
    |> cast(attrs, [:name, :email, :password_hash])
    |> validate_required([:email])
  end
end
