<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { useShoppingList } from '../store/useShoppingList'

const { totalShopItems /* filteredShopItems */ } = useShoppingList()
</script>

<template>
  <div class="navbar bg-base-300 shadow-sm">
    <div class="navbar-start">
      <div class="dropdown">
        <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
        </div>
        <ul
          tabindex="0"
          class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
        >
          <li>
            <RouterLink :to="{ name: 'home' }">
              Returning Home
            </RouterLink>
          </li>
          <li><a>Saved Shoplists</a></li>
          <li><a>Schedules</a></li>
        </ul>
      </div>
    </div>
    <div class="navbar-center">
      <RouterLink :to="{ name: 'home' }">
        <button class="btn btn-ghost text-xl">
          My Shoplist
        </button>
      </RouterLink>
    </div>
    <div class="navbar-end">
      <div class="justify-between">
        <div class="dropdown dropdown-end">
          <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
            <div class="indicator">
              <Icon icon="ion:cart" class="size-8" />
              <span class="badge badge-sm indicator-item badge-accent">{{ totalShopItems }}</span>
            </div>
          </div>
          <div
            tabindex="0"
            class="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow"
          >
            <div class="card-body">
              <span class="text-lg font-bold">{{ totalShopItems }} Items</span>
              <span class="text-info">Subtotal: $999 (not implemented)</span><!-- TODO: make this dynamic -->
              <div class="card-actions">
                <button class="btn btn-primary btn-block">
                  View cart
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="dropdown dropdown-end">
          <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
            <div class="w-10 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
