# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2022_03_23_182130) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "comments", force: :cascade do |t|
    t.string "comment"
    t.integer "user_id", null: false
    t.integer "component_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["component_id"], name: "index_comments_on_component_id"
    t.index ["user_id"], name: "index_comments_on_user_id"
  end

  create_table "components", force: :cascade do |t|
    t.string "name"
    t.text "html"
    t.text "css"
    t.integer "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "pending_components", force: :cascade do |t|
    t.string "name"
    t.string "html"
    t.string "css"
    t.integer "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_pending_components_on_user_id"
  end

  create_table "pending_contributors", force: :cascade do |t|
    t.boolean "is_contributor"
    t.integer "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_pending_contributors_on_user_id"
  end

  create_table "user_components", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "component_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["component_id"], name: "index_user_components_on_component_id"
    t.index ["user_id"], name: "index_user_components_on_user_id"
  end

  create_table "user_favorites", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "component_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["component_id"], name: "index_user_favorites_on_component_id"
    t.index ["user_id"], name: "index_user_favorites_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "email"
    t.string "phone"
    t.string "password_digest"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.boolean "is_contributor"
    t.string "img"
  end

  add_foreign_key "comments", "components"
  add_foreign_key "comments", "users"
  add_foreign_key "pending_components", "users"
  add_foreign_key "pending_contributors", "users"
  add_foreign_key "user_components", "components"
  add_foreign_key "user_components", "users"
  add_foreign_key "user_favorites", "components"
  add_foreign_key "user_favorites", "users"
end
