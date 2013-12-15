ActiveAdmin.register Product do
  permit_params :name, :description, :sold_out, :winner, :image

  show do |product|
    attributes_table do
      row :id
      row :name
      row :description
      row :sold_out
      row :winner
      row :created_at
      row :image
    end

    div :class => "panel" do
      h3 "Buyers"
      table do
        tr do
          th do
            "Name"
          end
          th do
            "Email"
          end
          th do
            "Instagram"
          end
          th do
            "Url"
          end
        end
        tbody do
          product.buyers.each do |buyer|
            tr do
              td do
                buyer.name
              end
              td do
                buyer.email
              end
              td do
                buyer.instagram
              end
              td do
                link_to(buyer.url, buyer.url)
              end
            end
          end
        end
      end
    end
  end
end