class H1rails::DemosController < ApplicationController

  before_action :renders_in_modal,  only: [:multistep_start, :multistep_step2, :coffee, :has_many_form, :delete_category]
  before_action -> { set_modal_size("xs") }, only: [:coffee]
  before_action -> { set_modal_size("lg") }, only: [:has_many_form]
  before_action -> { set_view_transition_style("slide-from-right") }, only: [:multistep_step2]

  skip_before_action :verify_authenticity_token, :only => [:delete_category]


  # fix cors issues
  after_action :set_access_control_headers, only: [:search]

  def set_access_control_headers
    headers['Access-Control-Allow-Origin'] = '*'
    headers['Access-Control-Allow-Methods'] = 'GET'
    headers['Access-Control-Allow-Headers'] = 'Content-Type'
  end
  
  def index
  end
  
  def coffee
    sleep(0.5)
  end

  def has_many_form
    @user = User.first
    @categories = @user.categories.not_draft
    if request.patch?
      sleep(0.5)
      if @user.update(user_category_params)
        flash[:toasts] = [
          { title: "Changes Saved", message: "You saved the changes", type: "success" },
        ]
        redirect_to demos_path(close_modal:true)
      end
    end 
  end

  def search 
    fruits = ["Apple", "Banana", "Cherry", "Grape", "Orange", "Pear", "Blueberry", "Kiwi"]
    results = fruits.select { |fruit| fruit.downcase.include?(params[:query].downcase) }
    sleep 0.5
    render json: results.map{ |result| { value: result.downcase, name: result } }
  end

  def new_category
    sleep(0.1)
    @category = Category.new(
      is_draft: true,
      user_id: User.first.id
    )
    @category.save
    redirect_to demo_has_many_form_path
  end

  def delete_category
    sleep(0.1)
    @user = User.first
    @categories = @user.categories.not_draft
    @category = Category.find(params[:category_id])
    @category.destroy
    redirect_to demo_has_many_form_path, status: :see_other
  end

  def multistep_start
    sleep(0.5)
    @user = User.first
    if request.patch?
      @user.validation_set = "step1"
      if @user.update(user_params)
        redirect_to demo_multistep_step2_path(modal:true)
      end
    end
  end

  def multistep_step2
    @user = User.first
    if request.patch?
      sleep(0.5)
      @user.validation_set = "step1"
      if @user.update(user_params)
        flash[:toasts] = [
          { title: "Changes Saved", message: "You saved the changes", type: "success" },
        ]
        redirect_to demos_path(close_modal:true)
      end
    end
  end

  def render_partial
    render params[:partial_name]
  end

  def links 
  end

  def user_category_params
    params.require(:user).permit(:categories_attributes => [:id, :title, :description])

  end

  def user_params
    params.require(:user).permit(:first_name,:last_name)
  end

  def toast 
    flash.now[:toasts] = [
      { title: "Success", message: "This is a success toast", type: "success" },
    ]
    htmx_prevent_page_load
  end
end