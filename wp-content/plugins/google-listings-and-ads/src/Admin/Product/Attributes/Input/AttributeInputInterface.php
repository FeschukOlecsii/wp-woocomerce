<?php
declare( strict_types=1 );

namespace Automattic\WooCommerce\GoogleListingsAndAds\Admin\Product\Attributes\Input;

defined( 'ABSPATH' ) || exit;

/**
 * Class AttributeInputInterface
 *
 * @package Automattic\WooCommerce\GoogleListingsAndAds\Admin\Product\Attributes\Input
 *
 * @since 1.5.0
 */
interface AttributeInputInterface {

	/**
	 * Returns a name for the attribute input.
	 *
	 * @return string
	 */
	public static function get_name(): string;

	/**
	 * Returns a short description for the attribute input.
	 *
	 * @return string
	 */
	public static function get_description(): string;

	/**
	 * Returns the input class used for the attribute input.
	 *
	 * Must be an instance of `InputInterface`.
	 *
	 * @return string
	 */
	public static function get_input_type(): string;
}
