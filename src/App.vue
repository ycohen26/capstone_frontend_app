<template>
  <div id="app">
    		<!-- Wrapper -->
    <div id="wrapper">

      <!-- Main -->
        <div id="main">
          <div class="inner">

            <!-- Header -->
              <header id="header">
                <a href="/bikes" class="logo"><strong>CycloShop</strong></a>
                <ul class="icons">
                  <li><a href="#" class="icon brands fa-twitter"><span class="label">Twitter</span></a></li>
                  <li><a href="#" class="icon brands fa-facebook-f"><span class="label">Facebook</span></a></li>
                </ul>
              </header>
                <router-view/>

          </div>
        </div>

      <!-- Sidebar -->
        <div id="sidebar">
          <div class="inner">

            <!-- Search -->
              <section id="search" class="alt">
                <form method="post" action="#">
                  <input type="text" name="query" id="query" placeholder="Search" />
                </form>
              </section>

            <!-- Menu -->
              <nav id="menu">
                <header class="major">
                  <h2>Menu</h2>
                </header>
                <ul>
                  <li><a href="/bikes">Homepage</a></li>
                  <li><a href="/bikes/new">Post a Bike</a></li>
                  <li><a href="/login">Login</a></li>
                  <li><a href="/logout">Logout</a></li>
                </ul>
              </nav>

            <!-- Section -->
              <!-- <section>
                <header class="major">
                  <h2>Ante interdum</h2>
                </header>
                <div class="mini-posts">
                  <article>
                    <a href="#" class="image"><img src="images/pic07.jpg" alt="" /></a>
                    <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore aliquam.</p>
                  </article>
                  <article>
                    <a href="#" class="image"><img src="images/pic08.jpg" alt="" /></a>
                    <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore aliquam.</p>
                  </article>
                  <article>
                    <a href="#" class="image"><img src="images/pic09.jpg" alt="" /></a>
                    <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore aliquam.</p>
                  </article>
                </div>
                <ul class="actions">
                  <li><a href="#" class="button">More</a></li>
                </ul>
              </section> -->

            <!-- Section -->
              <section>
                <header class="major">
                  <h2>Get in touch</h2>
                </header>
                <p>If you have any issues at all with your experience plese don't hesitate to call.</p>
                <ul class="contact">
                  <li class="icon solid fa-envelope"><a href="#">information@cycloshop.com</a></li>
                  <li class="icon solid fa-phone">(800) 123-4567</li>
                  <li class="icon solid fa-home">1234 Somewhere Road #8254<br />
                  Nashville, TN 89343-7458</li>
                </ul>
              </section>

            <!-- Footer -->
              <footer id="footer">
                <p class="copyright">&copy; Untitled. All rights reserved. Demo Images: <a href="https://unsplash.com">Unsplash</a>. Design: <a href="https://html5up.net">HTML5 UP</a>.
                </p>
              </footer>
              <!-- ::after -->
          </div>
          <a href="#sidebar" class="toggle">
            <!-- ::before -->
            <!-- "Toggle" == $0 -->
            </a>
        </div>

    </div>
  </div>
</template>


<script>
export default {
  mounted: {
    
  },
  methods: {
    isLoggedIn: function() {
      console.log(' i am checking if i\'m logged in')
      if (localStorage.getItem("jwt")) {
        return true
      } else {
        return false
      }
    },
    getUserId: function() {
      return parseInt(localStorage.getItem("user.id"));
    }
  }
}
</script>
