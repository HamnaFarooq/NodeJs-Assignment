@extends('layouts.layout')
@section('content')
<a href="{{'/user','usersController'}}" class="btn"> Go Back </a>

    <div class="container-fluid">
      <div class="container">
        <h2>Edit user</h2>
        <form action="/user/{{$user->id}}" method="POST">
            @csrf
            @method('patch')

          <div class="form-group">
              <label for="tid">password:</label>
              <select class="form-control" name="tid">
                  @foreach ($types as $type)
                  <option  <?php if ($type->tid == $user->tid) echo 'selected' ; ?>  value={{$type->tid}}>{{$type->tname}}</option>
                  @endforeach
              </select>
          </div>

          <div class="form-group">
              <label for="password">password:</label>
              <input type="password" class="form-control" name="password" value="{{$user->password}}" placeholder="Enter password" required pattern="[[A-Z]+[a-z]+[0-9]]{6,}">
          </div>

          @if($errors->any())
            @foreach ($errors->all() as $error)
                <div class="alert alert-danger">
                    {{$error}}
                </div>
            @endforeach
          @endif

          <button user="submit" class="btn btn-primary">Update</button>

        </form>
        </div>
    	</div>

@endsection
