<?php

namespace App\Http\Middleware;

use Illuminate\Foundation\Http\Middleware\VerifyCsrfToken as Middleware;

class VerifyCsrfToken extends Middleware
{
    /**
     * URIs vyjmuté z CSRF ochrany
     *
     * @var array<int, string>
     */
    protected $except = [
        'api/dashboard/save', // React SPA POST endpoint
    ];
}
