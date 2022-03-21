u1 = User.create!(first_name: "Dylan", last_name: "Dupasquier", email: "dylandupasquier@gmail.com", phone: "5034981666", password: "words6969", is_contributor: true)
u2 = User.create!(first_name: "man", last_name: "bearpig", email: "manbearpig@aol.com", phone: "7206666666", password: "yourmom", is_contributor: false)

Component.create!(name: "btn1", html: "<button className=\"button btn1\">Simple No CSS Button (b1)</button>", css: "", user_id: u1.id)
Component.create!(name: "btn2", html: "<button className=\"button btn2\">BIGREDBUTTON (b2)</button>", css: ".button {\nmargin: .5rem;\ncursor: pointer;\n}\n.btn2 {\nbackground: rgb(214, 0, 0);\nborder: none;\nborder-radius: 7px;\nbox-shadow: 5px 5px 10px;\nfont-size: 2rem;\npadding: 0;\ncursor: pointer;\n}", user_id: u1.id)

# UserComponent.create!(user_id: 1, component_id: 1)
# UserComponent.create!(user_id: 1, component_id: 2)

Comment.create!(comment: "This is an unstyled button.", user_id: 1, component_id: 1)
Comment.create!(comment: "This is a big, red button.", user_id: 1, component_id: 2)

UserFavorite.create!(user_id: 1, component_id: 1)
UserFavorite.create!(user_id:1, component_id: 2)
UserFavorite.create!(user_id: 2, component_id: 2)