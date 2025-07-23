<?php

namespace App\Actions\Fortify;

use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;
use Laravel\Fortify\Contracts\CreatesNewUsers;

class CreateNewUser implements CreatesNewUsers
{
    use PasswordValidationRules;

    /**
     * Validate and create a newly registered user.
     *
     * @param  array<string, string>  $input
     */
 public function create(array $input): User
{
    Validator::make($input, [
        'first_name' => ['required', 'string', 'max:255'],
        'last_name' => ['required', 'string', 'max:255'],
        'city' => ['required', 'string'],
        'barangay' => ['required', 'string'],
        'gender' => ['required', 'in:male,female,other'],
        'birthdate' => ['required', 'date'],
        'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
        'password' => ['required', 'string', 'min:8', 'confirmed'],
        'terms' => ['accepted'],
    ])->validate();

    return User::create([
        'first_name' => $input['first_name'],
        'last_name' => $input['last_name'],
        'city' => $input['city'],
        'barangay' => $input['barangay'],
        'gender' => $input['gender'],
        'birthdate' => $input['birthdate'],
        'email' => $input['email'],
        'password' => Hash::make($input['password']),
        'terms' => true,
    ]);
}
}