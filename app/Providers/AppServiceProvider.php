<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\URL; // Nezapomeň na tento import!

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        // Pokud aplikace běží v produkci (na Railway), vynutíme HTTPS
        if (config('app.env') === 'production') {
            URL::forceScheme('https');
        }
    }
}
