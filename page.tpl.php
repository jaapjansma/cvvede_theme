<?php

/**
 * @file
 * Default theme implementation to display a single Drupal page.
 *
 * The doctype, html, head and body tags are not in this template. Instead they
 * can be found in the html.tpl.php template in this directory.
 *
 * Available variables:
 *
 * General utility variables:
 * - $base_path: The base URL path of the Drupal installation. At the very
 *   least, this will always default to /.
 * - $directory: The directory the template is located in, e.g. modules/system
 *   or themes/bartik.
 * - $is_front: TRUE if the current page is the front page.
 * - $logged_in: TRUE if the user is registered and signed in.
 * - $is_admin: TRUE if the user has permission to access administration pages.
 *
 * Site identity:
 * - $front_page: The URL of the front page. Use this instead of $base_path,
 *   when linking to the front page. This includes the language domain or
 *   prefix.
 * - $logo: The path to the logo image, as defined in theme configuration.
 * - $site_name: The name of the site, empty when display has been disabled
 *   in theme settings.
 * - $site_slogan: The slogan of the site, empty when display has been disabled
 *   in theme settings.
 *
 * Navigation:
 * - $main_menu (array): An array containing the Main menu links for the
 *   site, if they have been configured.
 * - $secondary_menu (array): An array containing the Secondary menu links for
 *   the site, if they have been configured.
 * - $breadcrumb: The breadcrumb trail for the current page.
 *
 * Page content (in order of occurrence in the default page.tpl.php):
 * - $title_prefix (array): An array containing additional output populated by
 *   modules, intended to be displayed in front of the main title tag that
 *   appears in the template.
 * - $title: The page title, for use in the actual HTML content.
 * - $title_suffix (array): An array containing additional output populated by
 *   modules, intended to be displayed after the main title tag that appears in
 *   the template.
 * - $messages: HTML for status and error messages. Should be displayed
 *   prominently.
 * - $tabs (array): Tabs linking to any sub-pages beneath the current page
 *   (e.g., the view and edit tabs when displaying a node).
 * - $action_links (array): Actions local to the page, such as 'Add menu' on the
 *   menu administration interface.
 * - $feed_icons: A string of all feed icons for the current page.
 * - $node: The node object, if there is an automatically-loaded node
 *   associated with the page, and the node ID is the second argument
 *   in the page's path (e.g. node/12345 and node/12345/revisions, but not
 *   comment/reply/12345).
 *
 * Regions:
 * - $page['help']: Dynamic help text, mostly for admin pages.
 * - $page['highlighted']: Items for the highlighted content region.
 * - $page['content']: The main content of the current page.
 * - $page['sidebar_first']: Items for the first sidebar.
 * - $page['sidebar_second']: Items for the second sidebar.
 * - $page['header']: Items for the header region.
 * - $page['footer']: Items for the footer region.
 *
 * @see template_preprocess()
 * @see template_preprocess_page()
 * @see template_process()
 * @see html.tpl.php
 *
 * @ingroup themeable
 */
?>

<div class="wrap">
  <div id="top-anchor"></div>
  <div class="top_space">
    <a href="#" class="mobile_menu_trigger"></a>
  </div>
  <div class="logo_bar">
    <a href="http://www.cvvede.nl/"><img src="<?php print $logo; ?>" class="logo" alt="" /></a>
  </div>
  <div class="menu_bar group">
    <div class="site">
      <nav class="menu_menu">
        <ul>
          <li><a class="menu_active" href="http://www.cvvede.nl/home" title="" id="menu_1">Home</a></li><li><a  href="http://www.cvvede.nl/wie-zijn-we" title="" id="menu_3">Wie zijn we</a></li><li><a  href="http://www.cvvede.nl/ik-wil-helpen" title="" id="menu_4">Ik wil helpen</a><ul class="menu_submenu"><li><a class="nomouse " href="http://www.cvvede.nl/ik-wil-helpen/vrijwillige-inzet" title="">Vrijwillige inzet</a></li><li><a class="nomouse " href="http://www.cvvede.nl/ik-wil-helpen/activiteit-organiseren" title="">Activiteit organiseren</a></li><li><a class="nomouse " href="http://www.cvvede.nl/ik-wil-helpen/goederen" title="">Doneer goederen</a></li><li><a class="nomouse " href="http://www.cvvede.nl/ik-wil-helpen/kleding-doneren" title="">Doneer kleding</a></li><li><a class="nomouse " href="http://www.cvvede.nl/ik-wil-helpen/succesvolle-hulpvragen" title="">Succesvolle hulpvragen</a></li></ul></li>	</ul>
      </nav>		<nav class="menu_menu menu_right">
        <ul>
          <li><a  href="http://www.cvvede.nl/actueel" title="" id="menu_5">Actueel</a><ul class="menu_submenu"><li><a class="nomouse " href="http://www.cvvede.nl/actueel/cvve-in-de-media" title="">CVVE in de Media</a></li></ul></li><li><a  href="http://www.cvvede.nl/contact" title="" id="menu_6">Contact</a></li>			<li>
            <a href="http://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fwww.cvvede.nl%2F" target="_blank" class="social_icon icon_facebook"></a>
            <a href="mailto:?body=%0A%0Ahttp%3A%2F%2Fwww.cvvede.nl%2F" target="_blank" class="social_icon icon_email"></a>
          </li>
        </ul>
      </nav>		</div>
  </div>
  <div class="submenu_bar"><div class="site group"><ul class="sub_menu" id="sub_4"><li><a  href="http://www.cvvede.nl/ik-wil-helpen/vrijwillige-inzet" title="">Vrijwillige inzet</a></li><li><a  href="http://www.cvvede.nl/ik-wil-helpen/activiteit-organiseren" title="">Activiteit organiseren</a></li><li><a  href="http://www.cvvede.nl/ik-wil-helpen/goederen" title="">Doneer goederen</a></li><li><a  href="http://www.cvvede.nl/ik-wil-helpen/kleding-doneren" title="">Doneer kleding</a></li><li><a  href="http://www.cvvede.nl/ik-wil-helpen/succesvolle-hulpvragen" title="">Succesvolle hulpvragen</a></li></ul><ul class="sub_menu sub_menu2" id="sub_5"><li><a  href="http://www.cvvede.nl/actueel/cvve-in-de-media" title="">CVVE in de Media</a></li></ul></div></div>
  <div class="mobile_menu_bar_replacement"></div>
  <div class="site">
    <div class="content_wrapper no_padding_bottom group">

  <div id="page-wrapper"><div id="page">

    <div id="header"><div class="section clearfix">

      <?php print render($page['header']); ?>

    </div></div> <!-- /.section, /#header -->

    <?php print $messages; ?>

    <div id="main-wrapper"><div id="main" class="clearfix">

      <div id="content" class="column"><div class="section">
        <?php if ($page['highlighted']): ?><div id="highlighted"><?php print render($page['highlighted']); ?></div><?php endif; ?>
        <a id="main-content"></a>
        <?php print render($title_prefix); ?>
        <?php if ($title): ?><h1 class="title" id="page-title"><?php print $title; ?></h1><?php endif; ?>
        <?php print render($title_suffix); ?>
        <?php if ($tabs): ?><div class="tabs"><?php print render($tabs); ?></div><?php endif; ?>
        <?php print render($page['help']); ?>
        <?php if ($action_links): ?><ul class="action-links"><?php print render($action_links); ?></ul><?php endif; ?>
        <?php print render($page['content']); ?>
        <?php print $feed_icons; ?>
      </div></div> <!-- /.section, /#content -->

      <?php if ($page['sidebar_first']): ?>
        <div id="sidebar-first" class="column sidebar"><div class="section">
          <?php print render($page['sidebar_first']); ?>
        </div></div> <!-- /.section, /#sidebar-first -->
      <?php endif; ?>

      <?php if ($page['sidebar_second']): ?>
        <div id="sidebar-second" class="column sidebar"><div class="section">
          <?php print render($page['sidebar_second']); ?>
        </div></div> <!-- /.section, /#sidebar-second -->
      <?php endif; ?>

    </div></div> <!-- /#main, /#main-wrapper -->

    <div id="footer"><div class="section">
      <?php print render($page['footer']); ?>
    </div></div> <!-- /.section, /#footer -->

  </div></div> <!-- /#page, /#page-wrapper -->

      <section class="newsletter_form_wrapper">
        <h1>Houd me op de hoogte via email</h1>
        <div class="newsletter_form ajax_form">
          <div class="section group">
            <div class="col span_6_of_12">
              <div class="row">
                <input type="checkbox" name="Nieuws" value="Ja" id="newsletter_news" class="validate" />
                <label for="newsletter_news" class="row_label">nieuws</label>
              </div>
              <div class="row">
                <input type="checkbox" name="Hulpvragen" value="Ja" id="newsletter_help" />
                <label for="newsletter_help" class="row_label">hulpvragen</label>
              </div>
            </div>
            <div class="col span_6_of_12">
              <div class="row">
                <input type="text" class="validate email_validate input_form" name="Email" data-alert="E-mail" title="E-mail"/>
              </div>
              <div class="row">
                <input data-action="newsletter_form" type="button" name="send" value="Verzend" class="submit_form button button_short"/>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  </div>
</div>
<div class="clr"></div>
